import { NextResponse } from "next/server";
import { listOrders } from "@/server/services/order.service";

export async function GET() {
  try {
    const orders = await listOrders();

    return NextResponse.json({
      ok: true,
      orders,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Не вдалося отримати список замовлень.",
      },
      { status: 400 }
    );
  }
}