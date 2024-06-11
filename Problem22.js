import { helper } from "./HelperFunctions.js";
import  csv  from "csv-parser";
import fs from "fs";

const filePath = "./textfiles/0022_names.csv";

const results = [];

fs.createReadStream(filePath)
    .pipe(csv({ separator: "," }))
    .on("data", (data) => {
        console.log(data);
        results.push(data)
    })
    .on("end", () => {
        console.log(results);
    });
