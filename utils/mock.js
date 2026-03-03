const categories = [
  "车架",
  "前叉",
  "后胆",
  "轮组",
  "传动套件",
  "自选传动",
  "刹车",
  "车把",
  "把立",
  "把套",
  "内胎",
  "外胎",
  "坐管",
  "车座",
  "碗组"
];

const bikeTypes = ["公路车", "XC", "AM", "ENDURO", "DH", "土坡"];

const products = categories.reduce((acc, item, idx) => {
  acc[item] = [1, 2, 3].map((num) => ({
    id: `${idx + 1}-${num}`,
    name: `${item} 商品 ${num}`,
    desc: `${item} 商品介绍`,
    price: 1888 * num
  }));
  return acc;
}, {});

const completeBikes = bikeTypes.map((type, idx) => ({
  id: `bike-${idx}`,
  name: `${type} 整车 ${idx + 1}`,
  desc: `${type} 整车详情`,
  price: 18888 + idx * 1000
}));

module.exports = {
  categories,
  bikeTypes,
  products,
  completeBikes
};
