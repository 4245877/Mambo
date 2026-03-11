import { NextResponse } from "next/server";
import { getOrderById, updateOrderStatus } from "@/server/services/order.service";
import { validateUpdateOrderStatusDto } from "@/server/validators/order.validator";

type Context = {
  params: {
    id: string;
  };
};

export async function GET(_req: Request, { params }: Context) {
  try {
    const order = await getOrderById(params.id);

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

export async function PATCH(req: Request, { params }: Context) {
  try {
    const body = await req.json();
    const dto = validateUpdateOrderStatusDto(body);
    const order = await updateOrderStatus(params.id, dto.status);

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