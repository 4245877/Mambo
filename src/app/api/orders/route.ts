import { NextResponse } from "next/server";
import { createOrder } from "@/server/services/order.service";
import { validateCreateOrderDto } from "@/server/validators/order.validator";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const dto = validateCreateOrderDto(body);
    const order = await createOrder(dto);

    return NextResponse.json({
      ok: true,
      orderId: order.id,
      orderNumber: order.orderNumber,
      status: order.status,
      total: order.total,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Не вдалося створити замовлення.",
      },
      { status: 400 }
    );
  }
}