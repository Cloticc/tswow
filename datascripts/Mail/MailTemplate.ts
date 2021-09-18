import { DBC } from "wotlkdata";
import { MailTemplateQuery, MailTemplateRow } from "wotlkdata/dbc/types/MailTemplate";
import { Loot } from "../Loot/Loot";
import { MainEntity } from "../Misc/Entity";
import { Ids } from "../Misc/Ids";
import { Ref } from "../Refs/RefOld";

export class MailTemplate extends MainEntity<MailTemplateRow> {
    get Body() { return this.wrapLoc(this.row.Body); }
    get Subject() { return this.wrapLoc(this.row.Subject); }
    get ID() { return this.row.ID.get(); }
    get Loot() { return Loot.Mail.load(this.ID)}
}

export class MailTemplatePointer<T> extends Ref<T,MailTemplate> {
    exists(): boolean {
        return this.cell.get() > 0;
    }

    protected create(): MailTemplate {
        return MailTemplateRegistry.create();
    }

    protected clone(): MailTemplate {
        return MailTemplateRegistry.create(this.cell.get());
    }

    protected id(v: MailTemplate): number {
        return v.ID;
    }

    protected resolve(): MailTemplate {
        return MailTemplateRegistry.load(this.cell.get());
    }
}

export const MailTemplateRegistry = {
    create(parent: number = 0) {
        if(parent > 0) {
            return new MailTemplate(DBC.MailTemplate.findById(parent).clone(Ids.MailTemplate.id()))
        } else {
            return new MailTemplate(DBC.MailTemplate.add(Ids.MailTemplate.id()))
        }
    },

    load(entry: number) {
        return new MailTemplate(DBC.MailTemplate.findById(entry))
    },

    filter(query: MailTemplateQuery) {
        return DBC.MailTemplate.filter(query).map(x=>new MailTemplate(x));
    }
}