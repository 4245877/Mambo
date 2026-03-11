import { NextResponse } from "next/server";
import { getOrderById, updateOrderStatus } from "@/server/services/order.service";
import { validateUpdateOrderStatusDto } from "@/server/validators/order.validator";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const order = await getOrderById(id);

    if (!order) {
      return NextResponse.json(
        { ok: false, message: "Замовлення не знайдено." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      order,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Не вдалося отримати замовлення.",
      },
      { status: 400 }
    );
  }
}

export async function PATCH(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const dto = validateUpdateOrderStatusDto(body);

    const existing = await getOrderById(id);
    if (!existing) {
      return NextResponse.json(
        { ok: false, message: "Замовлення не знайдено." },
        { status: 404 }
      );
    }

    const order = await updateOrderStatus(id, dto.status);

    return NextResponse.json({
      ok: true,
      order,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Не вдалося оновити статус.",
      },
      { status: 400 }
    );
  }
}