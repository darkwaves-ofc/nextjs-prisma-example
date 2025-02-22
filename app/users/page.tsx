"use client"

import type React from "react"

import { createUser, getUsers } from "@/action/users"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function Page() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [users, setUsers] = useState<
    {
      name: string
      id: string
      email: string
    }[]
  >([])

  useEffect(() => {
    // Load initial users
    getUsers().then(setUsers)

    // Check system theme preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    document.documentElement.classList.toggle("dark")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createUser(name, email)
    const updatedUsers = await getUsers()
    setUsers(updatedUsers)
    setName("")
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-background p-4 transition-colors duration-200">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Add New User</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create User
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User List</CardTitle>
            </CardHeader>
            <CardContent>
              {users.length > 0 ? (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <p className="text-center text-muted-foreground">No users found</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

