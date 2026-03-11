import { prisma } from "@/lib/prisma";
import type { CreateOrderDto } from "@/server/dto/order.dto";
import type { OrderStatus } from "@/types/order";

function generateOrderNumber() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);

  return `MB-${yyyy}${mm}${dd}-${rand}`;
}

export async function createOrder(dto: CreateOrderDto) {
  const subtotal = dto.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryPrice = dto.items.length > 0 ? 99 : 0;
  const total = subtotal + deliveryPrice;

  const order = await prisma.order.create({
    data: {
      orderNumber: generateOrderNumber(),
      status: "new",
      fullName: dto.fullName,
      phone: dto.phone,
      email: dto.email || null,
      city: dto.city,
      deliveryMethod: dto.deliveryMethod,
      paymentMethod: dto.paymentMethod,
      comment: dto.comment || null,
      subtotal,
      deliveryPrice,
      total,
      items: {
        create: dto.items.map((item) => ({
          productId: item.productId,
          variantId: item.variantId,
          slug: item.slug,
          name: item.name,
          image: item.image,
          color: item.color,
          size: item.size,
          price: item.price,
          qty: item.qty,
        })),
      },
    },
    include: {
      items: true,
    },
  });

  return order;
}

export async function listOrders() {
  return prisma.order.findMany({
    include: {
      items: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getOrderById(id: string) {
  return prisma.order.findUnique({
    where: { id },
    include: {
      items: true,
    },
  });
}

export async function updateOrderStatus(id: string, status: OrderStatus) {
  return prisma.order.update({
    where: { id },
    data: { status },
    include: {
      items: true,
    },
  });
}