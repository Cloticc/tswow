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
import { DBCRow } from '../DBCRow'
import { DBCFile } from '../DBCFile'
import { Relation } from '../../query/Relations'
import { DBCKeyCell , DBCIntCell , DBCFloatCell} from '../DBCCell'
import { int , float} from '../../primitives'
import { PrimaryKey } from '../../table/PrimaryKey'

 /**
  * Main row definition
  * - Add column comments to the commented getters below
  * - Add file comments to DBCFiles.ts
  */
export class SpellVisualKitModelAttachRow extends DBCRow<SpellVisualKitModelAttachCreator,SpellVisualKitModelAttachQuery> {
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
    get ParentSpellVisualKitID() { return new DBCIntCell(this,this.buffer,this.offset+4)}

    /**
     * No comment (yet!)
     */
    get SpellVisualEffectNameID() { return new DBCIntCell(this,this.buffer,this.offset+8)}

    /**
     * No comment (yet!)
     */
    get AttachmentID() { return new DBCIntCell(this,this.buffer,this.offset+12)}

    /**
     * No comment (yet!)
     */
    get OffsetX() { return new DBCFloatCell(this,this.buffer,this.offset+16)}

    /**
     * No comment (yet!)
     */
    get OffsetY() { return new DBCFloatCell(this,this.buffer,this.offset+20)}

    /**
     * No comment (yet!)
     */
    get OffsetZ() { return new DBCFloatCell(this,this.buffer,this.offset+24)}

    /**
     * No comment (yet!)
     */
    get Yaw() { return new DBCFloatCell(this,this.buffer,this.offset+28)}

    /**
     * No comment (yet!)
     */
    get Pitch() { return new DBCFloatCell(this,this.buffer,this.offset+32)}

    /**
     * No comment (yet!)
     */
    get Roll() { return new DBCFloatCell(this,this.buffer,this.offset+36)}

    /**
     * Creates a clone of this row with new primary keys.
     *
     * Cloned rows are automatically added at the end of the DBC file.
     */
    clone(ID : int, c? : SpellVisualKitModelAttachCreator) : this {
        return this.cloneInternal([ID],c);
    }
}

/**
 * Used for object creation (Don't comment these)
 */
export type SpellVisualKitModelAttachCreator = {
    ParentSpellVisualKitID?: int
    SpellVisualEffectNameID?: int
    AttachmentID?: int
    OffsetX?: float
    OffsetY?: float
    OffsetZ?: float
    Yaw?: float
    Pitch?: float
    Roll?: float
}

/**
 * Used for queries (Don't comment these)
 */
export type SpellVisualKitModelAttachQuery = {
    ID? : Relation<int>
    ParentSpellVisualKitID? : Relation<int>
    SpellVisualEffectNameID? : Relation<int>
    AttachmentID? : Relation<int>
    OffsetX? : Relation<float>
    OffsetY? : Relation<float>
    OffsetZ? : Relation<float>
    Yaw? : Relation<float>
    Pitch? : Relation<float>
    Roll? : Relation<float>
}

/**
 * Table definition (specifies arguments to 'add' function)
 * - Add file comments to DBCFiles.ts
 */
export class SpellVisualKitModelAttachDBCFile extends DBCFile<
    SpellVisualKitModelAttachCreator,
    SpellVisualKitModelAttachQuery,
    SpellVisualKitModelAttachRow> {
    add(ID : int, c? : SpellVisualKitModelAttachCreator) : SpellVisualKitModelAttachRow {
        return this.makeRow(0).clone(ID,c)
    }
    findById(id: number) {
        return this.fastSearch(id);
    }
}

/**
 * Table singleton (Object used by 'DBC' namespace)
 * - Add file comments to DBCFiles.ts
 */
export const DBC_SpellVisualKitModelAttach = new SpellVisualKitModelAttachDBCFile(
    'SpellVisualKitModelAttach',
    (table,buffer,offset)=>new SpellVisualKitModelAttachRow(table,buffer,offset))
