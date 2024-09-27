CREATE TABLE `rincian` (
	`id` integer PRIMARY KEY NOT NULL,
	`sub_kegiatan_id` integer NOT NULL,
	`nama_belanja` text NOT NULL,
	`anggaran_awal` integer NOT NULL,
	`anggaran_akhir` integer NOT NULL,
	`realisasi` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer,
	FOREIGN KEY (`sub_kegiatan_id`) REFERENCES `sub_kegiatan`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `sub_kegiatan` (
	`id` integer PRIMARY KEY NOT NULL,
	`nama` text NOT NULL,
	`tahun` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer
);
