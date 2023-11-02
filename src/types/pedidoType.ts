export type ItemPedidoType = {
  productId: string;
  quantity: number;
};

export type PedidoType = {
  name: string;
  deliveryAddress: string;
  items: ItemPedidoType[];
};
