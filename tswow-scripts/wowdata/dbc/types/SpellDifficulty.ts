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
import { int } from '../../primitives'
import { Relation } from '../../query/Relations'
import { PrimaryKey } from '../../table/PrimaryKey'
import { DBCIntArrayCell, DBCKeyCell } from '../DBCCell'
import { DBCFile } from '../DBCFile'
import { DBCRow } from '../DBCRow'

 /**
  * Main row definition
  * - Add column comments to the commented getters below
  * - Add file comments to DBCFiles.ts
  */
export class SpellDifficultyRow extends DBCRow<SpellDifficultyCreator,SpellDifficultyQuery> {
    /**
     * Primary Key
     *
     * No comment (yet!)
     */
    @PrimaryKey()
    get ID() { return new DBCKeyCell(this,this.buffer,this.offset+0)}

    /**
     * No comment (yet!)
     */
    get DifficultySpellID() { return new DBCIntArrayCell(this,4,this.buffer,this.offset+4)}

    /**
     * Creates a clone of this row with new primary keys.
     *
     * Cloned rows are automatically added at the end of the DBC file.
     */
    clone(ID : int, c? : SpellDifficultyCreator) : this {
        return this.cloneInternal([ID],c);
    }
}

/**
 * Used for object creation (Don't comment these)
 */
export type SpellDifficultyCreator = {
    DifficultySpellID?: int[]
}

/**
 * Used for queries (Don't comment these)
 */
export type SpellDifficultyQuery = {
    ID? : Relation<int>
    DifficultySpellID? : Relation<int>
}

/**
 * Table definition (specifies arguments to 'add' function)
 * - Add file comments to DBCFiles.ts
 */
export class SpellDifficultyDBCFile extends DBCFile<
    SpellDifficultyCreator,
    SpellDifficultyQuery,
    SpellDifficultyRow> {
    constructor() {
        super('SpellDifficulty',(t,b,o)=>new SpellDifficultyRow(t,b,o))
    }
    /** Loads a new SpellDifficulty.dbc from a file. */
    static read(path: string): SpellDifficultyDBCFile {
        return new SpellDifficultyDBCFile().read(path);
    }
    add(ID : int, c? : SpellDifficultyCreator) : SpellDifficultyRow {
        return this.makeRow(0).clone(ID,c)
    }
    findById(id: number) {
        return this.fastSearch(id);
    }
}