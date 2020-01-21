function newProductSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.product({ mutation_in: ['CREATED'] }).node()
}

const newProduct = {
  subscribe: newProductSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newProduct,
}
