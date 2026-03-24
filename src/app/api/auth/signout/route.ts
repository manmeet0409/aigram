import { signOut } from "@/auth"

export const POST = async () => {
  try {
    await signOut({ redirect: false })
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Sign out error:", error)
    return new Response(JSON.stringify({ error: "Sign out failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
