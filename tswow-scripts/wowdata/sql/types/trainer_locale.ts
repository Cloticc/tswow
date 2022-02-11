/*
  * Copyright (C) 2020 tswow <https://github.com/tswow/>
  * This program is free software: you can redistribute it and/or
  * modify it under the terms of the GNU General Public License as
  * published by the Free Software Foundation, version 3.
  *
  * This program is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  * See the GNU General Public License for more details.
  *
  * You should have received a copy of the GNU General Public License
  * along with this program. If not, see <https://www.gnu.org/licenses/>.
  */

/* tslint:disable */
import { int, smallint, text, varchar } from '../../primitives'
import { Relation } from '../../query/Relations'
import { PrimaryKey } from '../../table/PrimaryKey'
import { SQLCell, SQLCellReadOnly } from '../SQLCell'
import { SqlRow } from '../SQLRow'
import { SqlTable } from '../SQLTable'

 /**
  * Main row definition
  * - Add column comments to the commented getters below
  * - Add file comments to DBCFiles.ts
  */
export class trainer_localeRow extends SqlRow<trainer_localeCreator,trainer_localeQuery> {
    /**
     * Primary Key
     *
     * No comment (yet!)
     */
    @PrimaryKey()
    get Id() {return new SQLCellReadOnly<int, this>(this, 'Id')}

    /**
     * Primary Key
     *
     * No comment (yet!)
     */
    @PrimaryKey()
    get locale() {return new SQLCellReadOnly<varchar, this>(this, 'locale')}

    /**
     * No comment (yet!)
     */
    get Greeting_lang() {return new SQLCell<text, this>(this, 'Greeting_lang')}

    /**
     * No comment (yet!)
     */
    get VerifiedBuild() {return new SQLCell<smallint, this>(this, 'VerifiedBuild')}

    /**
     * Creates a clone of this row with new primary keys.
     *
     * Cloned rows are automatically added to the SQL table.
     */
    clone(Id : int,locale : varchar, c? : trainer_localeCreator) : this {
        return this.cloneInternal([Id,locale],c)
    }
}

/**
 * Used for object creation (Don't comment these)
 */
export type trainer_localeCreator = {
    Id? : int,
    locale? : varchar,
    Greeting_lang? : text,
    VerifiedBuild? : smallint,
}

/**
 * Used for object queries (Don't comment these)
 */
export type trainer_localeQuery = {
    Id? : Relation<int>,
    locale? : Relation<varchar>,
    Greeting_lang? : Relation<text>,
    VerifiedBuild? : Relation<smallint>,
}

/**
 * Table definition (specifies arguments to 'add' function)
 * - Add file comments to SQLFiles.ts
 */
export class trainer_localeTable extends SqlTable<
    trainer_localeCreator,
    trainer_localeQuery,
    trainer_localeRow> {
    add(Id : int,locale : varchar, c? : trainer_localeCreator) : trainer_localeRow {
        const first = this.first();
        if(first) return first.clone(Id,locale,c)
        else return this.rowCreator(this, {}).clone(Id,locale,c)
    }
}

/**
 * Table singleton (Object used by 'SQL' namespace)
 * - Add file comments to SQLFiles.ts
 */
export const SQL_trainer_locale = new trainer_localeTable(
    'trainer_locale',
    (table, obj)=>new trainer_localeRow(table, obj))