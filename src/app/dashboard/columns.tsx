"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Subkegiatan = {
  id: string;
  nama: string;
  tahun: number;
  anggaran: number;
  realisasi: number;
};

export type Rincian = {
  id: string;
  subkegiatanid: string;
  namaBelanja: string;
  anggaranAwal: number;
  anggaranAkhir: number;
  realisasi: number;
};

export const subkegiatanColumns: ColumnDef<Subkegiatan>[] = [
  {
    accessorKey: "nama",
    header: "Nama",
    cell: ({ row }) => {
      const subKegiatan = row.original;
      return (
        <Link
          href={`/dashboard/${subKegiatan.id}`}
          className="hover:underline text-blue-600"
        >
          {subKegiatan.nama}
        </Link>
      );
    },
  },
  {
    accessorKey: "tahun",
    header: "Tahun",
  },
  {
    accessorKey: "anggaran",
    header: () => <div className="text-center">Anggaran</div>,
    cell: ({ row }) => {
      const anggaran = parseFloat(row.getValue("anggaran"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(anggaran);

      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "realisasi",
    header: "Realisasi",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Share</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
              <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];

export const rincianColumns: ColumnDef<Rincian>[] = [
  {
    accessorKey: "namaBelanja",
    header: "Nama Belanja",
  },
  {
    accessorKey: "anggaranAwal",
    header: () => <div className="text-center">Anggaran Awal</div>,
    cell: ({ row }) => {
      const anggaran = parseFloat(row.getValue("anggaranAwal"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(anggaran);

      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "anggaranAkhir",
    header: () => <div className="text-center">Anggaran Akhir</div>,
    cell: ({ row }) => {
      const anggaran = parseFloat(row.getValue("anggaranAkhir"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(anggaran);

      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "realisasi",
    header: "Realisasi",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Share</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
              <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
