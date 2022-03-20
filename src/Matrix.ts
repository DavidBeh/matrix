import {to_number} from "svelte/internal";

export class Matrix {
    #grid: number[][] = []

    constructor(rows?: number, columns?: number) {
        this.rows = rows ?? 0;
        this.columns = columns ?? 0;
    }

    /**
     * Gets an element from the Matrix.
     * Returns null for elements out of bounds
     * @param row 0-based row, Integer
     * @param col 0-based column, Integer
     */
    get(row: number, col: number): number | null {
        if (this.rows <= row || this.columns <= col) return null;
        return this.#grid[row]?.[col] ?? 0
    }

    /**
     * Sets an element. Automatically resizes
     * the matrix if needed
     * @param row 0-based row, Integer
     * @param col 0-based column, Integer
     * @param value The new value
     */
    set(row: number, col: number, value: number): void {
        if (this.rows <= row)
            this.rows = row + 1;

        if (!Array.isArray(this.#grid[row]))
            this.#grid[row] = [];

        if (this.columns <= col)
            this.columns = col + 1;

        this.#grid[row][col] = value;
    }

    /**
     * Represents the number of rows in the matrix.
     * Can be set
     */
    rows: number = 0;
    /**
     * Represents the number of columns in the matrix.
     * Can be set
     */
    columns: number = 0;

    /**
     * Returns the number of elements in the matrix
     */
    get count() {
        return this.rows * this.columns;
    }
}

function f() {
    let l = new Matrix();

}