"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import clsx from "clsx"

const data: Stats[] = [
  {
    name: "Emvy",
    kdr: 316,
    accuracy: 12,
    bulletsHit: 3416,
    suicides: 3211,
    deaths: 432,
    kills: 565,
    wounds: 4645,
    headshots: 12,
    bulletsFired: 2134,
    hours: 54,
  },
  {
    name: "Louis",
    kdr: 316,
    accuracy: 12,
    bulletsHit: 3416,
    suicides: 3211,
    deaths: 432,
    kills: 565,
    wounds: 4645,
    headshots: 12,
    bulletsFired: 2134,
    hours: 54,
  },
  {
    name: "lovepotato",
    kdr: 316,
    accuracy: 12,
    bulletsHit: 3416,
    suicides: 3211,
    deaths: 432,
    kills: 565,
    wounds: 4645,
    headshots: 12,
    bulletsFired: 2134,
    hours: 54,
  },
  {
    name: "JotapeN",
    kdr: 316,
    accuracy: 12,
    bulletsHit: 3416,
    suicides: 3211,
    deaths: 432,
    kills: 565,
    wounds: 4645,
    headshots: 12,
    bulletsFired: 2134,
    hours: 54,
  },
  {
    name: "Neon",
    kdr: 316,
    accuracy: 12,
    bulletsHit: 3416,
    suicides: 3211,
    deaths: 432,
    kills: 565,
    wounds: 4645,
    headshots: 12,
    bulletsFired: 2134,
    hours: 54,
  },
  {
    name: "Studio",
    kdr: 316,
    accuracy: 12,
    bulletsHit: 3416,
    suicides: 3211,
    deaths: 432,
    kills: 565,
    wounds: 4645,
    headshots: 12,
    bulletsFired: 2134,
    hours: 54,
  },
]

export type Stats = {

  name: string
  kdr: number
  accuracy: number
  bulletsHit: number
  suicides: number
  deaths: number
  kills: number
  wounds: number
  headshots: number
  bulletsFired: number
  hours: number
}

export const columns: ColumnDef<Stats>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "kdr",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          KDR
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("kdr")}</div>
    ),
  },
  {
    accessorKey: "accuracy",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Accuracy
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("accuracy")}</div>
    ),
  },
  {
    accessorKey: "bulletsHit",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Bullets Hit
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bulletsHit")}</div>
    ),
  },
  {
    accessorKey: "suicides",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Suicides
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("suicides")}</div>
    ),
  },
  {
    accessorKey: "deaths",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Deaths
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("deaths")}</div>
    ),
  },
  {
    accessorKey: "kills",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kills
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("kills")}</div>
    ),
  },
  {
    accessorKey: "wounds",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Wounds
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("wounds")}</div>
    ),
  },
  {
    accessorKey: "headshots",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Headshots
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("headshots")}</div>
    ),
  },
  {
    accessorKey: "bulletsFired",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Bullets Fired
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bulletsFired")}</div>
    ),
  },
  {
    accessorKey: "hours",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          className={clsx("opacity-75 text-white p-0", { 'opacity-100': column.getIsSorted() })}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hours
          {column.getIsSorted() && <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("hours")}</div>
    ),
  },
  /*   {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    }, */
  /* {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  }, */
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full rounded-md border-none bg-background-dark">
      <div className="flex justify-between items-center p-4 gap-4 md:gap-0 flex-col md:flex-row">
        <h1 className="text-2xl text-muted font-rajdhani font-medium flex gap-2 justify-center">PVP - 50X NA<small>|   06/01/2023</small></h1>
        <div className="flex flex-grow justify-end gap-3 flex-col md:flex-row">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-transparent border-table-hl text-table-hl">
              <Button variant="outline" className="">
                Select Server <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-transparent border-table-hl text-table-hl">
              <Button variant="outline" className="">
                Filter By Wipe <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-transparent border-table-hl text-table-hl">
              <Button variant="outline" className="">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            placeholder="Search Name"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm bg-transparent border-table-hl text-table-hl placeholder:text-table-hl"
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-primary hover:bg-primary border-none">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-white">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-table-hl/30 hover:bg-white/10"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 p-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
