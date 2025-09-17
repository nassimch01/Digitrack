// ./ui/table.tsx

import * as React from "react";

export const Table = ({ children }) => (
    <table className="w-full text-sm">{children}</table>
);

export const TableHeader = ({ children }) => (
    <thead className="bg-gray-100">{children}</thead>
);

export const TableBody = ({ children }) => (
    <tbody>{children}</tbody>
);

export const TableRow = ({ children }) => (
    <tr className="border-b hover:bg-gray-50 transition">{children}</tr>
);

export const TableHead = ({ children }) => (
    <th className="text-left p-3 text-sm font-semibold text-gray-600 uppercase tracking-wider">{children}</th>
);

export const TableCell = ({ children }) => (
    <td className="p-3 text-sm text-gray-700">{children}</td>
);

