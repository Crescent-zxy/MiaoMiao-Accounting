import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";
import day from "dayjs";

type RecordItem = {
  tagIds: string[];
  note: string;
  category: "+" | "-";
  amount: string;
  createTime: string;
};

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, records);
  const addRecord = (record: Omit<RecordItem, "createTime">) => {
    if (parseFloat(record.amount) <= 0) {
      alert("请输入金额！");
      return false;
    }
    const newRecord = {
      ...record,
      createTime: day(new Date().toISOString()).format("YYYY.MM.DD"),
    };
    setRecords([...records, newRecord]);
    return true;
  };
  return { records, addRecord };
};

export { useRecords };
