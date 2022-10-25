import { parse } from 'csv-parse';
import * as path from "path";
import * as fs from "fs";

export function ParseCSV(): DataStructure[] {
    const csvFilePath = path.resolve('../transfers.csv');
    const headers = ['TokenID', 'Contract', 'ReceiverAddress'];
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    parse(fileContent, {
        delimiter: ',',
        columns: headers,
    }, (error, result: DataStructure[]) => {
        if (error) {
            console.error(error);
        }
        return result;
    })
    throw new Error("Couldnt Parse CSV File");
}

export type DataStructure = {
    TokenID: string
    Contract: string
    ReceiverAddress: string
}
