async function goods(parent, args, context) {
  const where = args.filter
    ? {
        OR: [
          { name_contains: args.filter },
          { url_contains: args.filter },
        ],
      }
    : {}

  const products = await context.prisma.products({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .productsConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    products,
    count,
  }
}

async function manufacturers(parent, args, context) {
  const where = args.filter
    ? {
        OR: [
          { name_contains: args.filter },
          { email_contains: args.filter },
        ],
      }
    : {}

  const users = await context.prisma.users({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .usersConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    users,
    count,
  }
}

module.exports = {
  goods,
  manufacturers,
}
