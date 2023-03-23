-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "budget_left" INTEGER NOT NULL DEFAULT 1000
);
INSERT INTO "new_categories" ("budget", "id", "name") SELECT "budget", "id", "name" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
