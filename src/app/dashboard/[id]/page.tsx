import React from "react";
import { DataTable } from "@/components/ui/data-table";
import { Rincian, rincianColumns } from "../columns";

async function getData(): Promise<Rincian[]> {
  return [
    {
      id: "1212121",
      subkegiatanid: "723823",
      namaBelanja: "Evaluasi",
      anggaranAwal: 200000000,
      anggaranAkhir: 250000000,
      realisasi: 150000000,
    },
  ];
}

const RincianPage = async () => {
  const data = await getData();
  return (
    <div>
      <DataTable columns={rincianColumns} data={data} />
    </div>
  );
};

export default RincianPage;
