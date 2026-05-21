interface Order {
  userId: number;
  total: number;
  status: string;
}

function groupOrderByUser(orders: Order[]): Record<number, number> {
  return orders
    .filter((o) => o.status === "paid")
    .reduce(
      (acc, o) => {
        acc[o.userId] = (acc[o.userId] || 0) + o.total;
        return acc;
      },
      {} as Record<number, number>,
    );
}

const orders = [
  { userId: 1, total: 200, status: "paid" },
  { userId: 2, total: 50, status: "pending" },
  { userId: 1, total: 75, status: "paid" },
  { userId: 2, total: 20, status: "paid" },
  { userId: 3, total: 300, status: 'paid' },
  { userId: 3, total: 150, status: 'cancelled' },
  { userId: 4, total: 90,  status: 'paid' },
  { userId: 2, total: 110, status: 'paid' },
  { userId: 1, total: 45,  status: 'pending' },
  { userId: 4, total: 60,  status: 'paid' },
  { userId: 3, total: 200, status: 'paid' },
  { userId: 5, total: 500, status: 'paid' },
];

console.log(groupOrderByUser(orders));
