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
import { mediumint, tinyint } from '../../primitives'
import { Relation } from '../../query/Relations'
import { PrimaryKey } from '../../table/PrimaryKey'
import { SQLCellReadOnly } from '../SQLCell'
import { SqlRow } from '../SQLRow'
import { SqlTable } from '../SQLTable'

 /**
  * Main row definition
  * - Add column comments to the commented getters below
  * - Add file comments to DBCFiles.ts
  */
export class game_event_gameobject_questRow extends SqlRow<game_event_gameobject_questCreator,game_event_gameobject_questQuery> {
    /**
     * Primary Key
     *
     * No comment (yet!)
     */
    @PrimaryKey()
    get eventEntry() {return new SQLCellReadOnly<tinyint, this>(this, 'eventEntry')}

    /**
     * Primary Key
     *
     * No comment (yet!)
     */
    @PrimaryKey()
    get id() {return new SQLCellReadOnly<mediumint, this>(this, 'id')}

    /**
     * Primary Key
     *
     * No comment (yet!)
     */
    @PrimaryKey()
    get quest() {return new SQLCellReadOnly<mediumint, this>(this, 'quest')}

    /**
     * Creates a clone of this row with new primary keys.
     *
     * Cloned rows are automatically added to the SQL table.
     */
    clone(eventEntry: tinyint,id: mediumint,quest: mediumint, c? : game_event_gameobject_questCreator) : this {
        return this.cloneInternal([eventEntry,id,quest],c)
    }
}

/**
 * Used for object creation (Don't comment these)
 */
export type game_event_gameobject_questCreator = {
    eventEntry? : tinyint,
    id? : mediumint,
    quest? : mediumint,
}

/**
 * Used for object queries (Don't comment these)
 */
export type game_event_gameobject_questQuery = {
    eventEntry? : Relation<tinyint>,
    id? : Relation<mediumint>,
    quest? : Relation<mediumint>,
}

/**
 * Table definition (specifies arguments to 'add' function)
 * - Add file comments to SQLFiles.ts
 */
export class game_event_gameobject_questTable extends SqlTable<
    game_event_gameobject_questCreator,
    game_event_gameobject_questQuery,
    game_event_gameobject_questRow> {
    add(eventEntry: tinyint,id: mediumint,quest: mediumint, c? : game_event_gameobject_questCreator) : game_event_gameobject_questRow {
        const first = this.first();
        if(first) return first.clone(eventEntry,id,quest,c)
        else return this.rowCreator(this, {}).clone(eventEntry,id,quest,c)
    }
}

/**
 * Table singleton (Object used by 'SQL' namespace)
 * - Add file comments to SQLFiles.ts
 */
export const SQL_game_event_gameobject_quest = new game_event_gameobject_questTable(
    'game_event_gameobject_quest',
    (table, obj)=>new game_event_gameobject_questRow(table, obj))