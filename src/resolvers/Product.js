function postedBy(parent, args, context) {
  return context.prisma.product({ id: parent.id }).postedBy()
}

module.exports = {
  postedBy,
}
