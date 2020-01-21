function products(parent, args, context) {
  return context.prisma.user({ id: parent.id }).products()
}

module.exports = {
  products,
}
