import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const subKegiatanTable = sqliteTable("sub_kegiatan", {
  id: integer("id").primaryKey(),
  nama: text("nama").notNull(),
  tahun: integer("tahun").notNull(), // Menambahkan kolom tahun
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});

export const rincianTable = sqliteTable("rincian", {
  id: integer("id").primaryKey(),
  subKegiatanId: integer("sub_kegiatan_id")
    .notNull()
    .references(() => subKegiatanTable.id, { onDelete: "cascade" }),
  namaBelanja: text("nama_belanja").notNull(),
  anggaranAwal: integer("anggaran_awal").notNull(),
  anggaranAkhir: integer("anggaran_akhir").notNull(),
  realisasi: integer("realisasi").notNull(),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});

// ... rest of the code remains the same
