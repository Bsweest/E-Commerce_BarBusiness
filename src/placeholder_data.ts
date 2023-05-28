export type ItemData = {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  type: number;
};

export const WineItem: ItemData[] = [
  {
    id: 1,
    name: 'Tequila',
    price: 1200,
    description:
      'Tequila - Một loại đồ uống thú vị của Mexico.\n\
      Tequila là một loại rượu được sản xuất từ nước mía hoặc Agave Azul, một loại cây có nguồn gốc từ Mexico. Nó là một trong những loại đồ uống phổ biến nhất trên thế giới và được sử dụng để tạo ra nhiều loại cocktail khác nhau.\n\
      Một trong những loại Tequila tốt nhất trên thị trường hiện nay là Tequila Ley 925. Được sản xuất tại Mexico bởi những người thợ làm rượu lâu đời, loại Tequila này có mùi hương đặc trưng của Agave Azul, mang đến cho người sử dụng một trải nghiệm thưởng thức tuyệt vời.\n\
      Ngoài việc uống Tequila trực tiếp, Tequila Ley 925 còn được sử dụng để tạo ra nhiều loại cocktail phổ biến, chẳng hạn như Margarita và Tequila Sunrise. Với hương vị độc đáo và màu sắc tươi tắn, các loại cocktail này đã trở thành món ăn và đồ uống yêu thích của rất nhiều người.\n\
      Với sự kết hợp giữa vị ngọt ngào và hương vị đậm đà của Agave Azul, Tequila Ley 925 là một lựa chọn tuyệt vời cho những người yêu thích các loại rượu mạnh. Hãy thử nó ngay hôm nay và cảm nhận sự khác biệt!',
    url: '/asset/wine/tequila.jpg',
    type: 1,
  },
  {
    id: 2,
    name: 'Triple Sec',
    price: 1200,
    description:
      'Rượu Triple Sec là một loại rượu quả cam có hương vị ngọt và hương thơm của vỏ cam được lên men từ cồn và đường. Tên của nó xuất phát từ tiếng Pháp, với "triple" có nghĩa là ba, ám chỉ sự hiện diện của ba loại vỏ cam khác nhau trong công thức sản xuất. \n\
      Rượu Triple Sec thường được sử dụng để tạo ra các món cocktail, đặc biệt là các loại cocktail có hương vị cam như Margarita, Cosmopolitan và Long Island Ice Tea. Ngoài ra, nó cũng có thể được sử dụng như một chất đi kèm với một số loại rượu khác để tăng thêm hương vị và sự phong phú cho thức uống.',
    url: '/asset/wine/triple_sec.jpg',
    type: 1,
  },
  {
    id: 3,
    name: 'Gin',
    price: 1800,
    description:
      'Rượu Gin là một loại rượu được lên men từ các thực vật như hoa quả, hạt và các loại thảo mộc, và có hương vị đặc trưng của cây thông. Rượu Gin là một trong những loại rượu có lịch sử lâu đời nhất, đã được phát minh vào thế kỷ 17 tại Hà Lan và sau đó trở nên phổ biến ở Anh.\n\
      Rượu Gin thường được dùng để tạo ra các loại cocktail, đặc biệt là các loại cocktail cổ điển như Martini và Negroni. Ngoài ra, nó cũng có thể được sử dụng để pha chế các loại thức uống khác như Gin and Tonic hoặc Gimlet.',
    url: '/asset/wine/gin.jpg',
    type: 1,
  },
  {
    id: 4,
    name: 'Vodka',
    price: 1200,
    description: 'Hi',
    url: '/asset/wine/vodka.jpg',
    type: 1,
  },
  {
    id: 5,
    name: 'Vermouth',
    price: 2000,
    description: 'Hi',
    url: '/asset/wine/vermouth.jpg',
    type: 1,
  },
  {
    id: 6,
    name: 'Bitters',
    price: 1000,
    description: 'Hi',
    url: '/asset/wine/bitters.jpg',
    type: 1,
  },
  {
    id: 7,
    name: 'Campari',
    price: 1500,
    description: 'Hi',
    url: '/asset/wine/campari.jpg',
    type: 1,
  },
  {
    id: 8,
    name: 'Whiskey',
    price: 1500,
    description: 'Hi',
    url: '/asset/wine/whiskey.jpg',
    type: 1,
  },
  {
    id: 9,
    name: 'Bourbon',
    price: 1500,
    description: 'Hi',
    url: '/asset/wine/bourbon.jpg',
    type: 1,
  },
  {
    id: 10,
    name: 'Rye',
    price: 1500,
    description: 'Hi',
    url: '/asset/wine/rye.jpg',
    type: 1,
  },
];

export const BartenderItem: ItemData[] = [
  {
    id: 11,
    name: 'Đong rượu Jigger',
    price: 200,
    description:
      'Jigger là một công cụ đo lường trong ngành nghề pha chế đồ uống, thường được sử dụng để đo lượng rượu, nước hoa quả, đường và các thành phần khác để tạo ra các loại cocktail hoặc đồ uống khác. Jigger thường có hình dạng hình nón và có các đường thước đo khác nhau trên hai đầu của nó để đo lượng chất lỏng khác nhau. Các đơn vị đo thông thường của jigger là ounce và ml. Jigger là một công cụ quan trọng giúp cho việc pha chế đồ uống được chính xác và đồng đều, giúp tăng tính thẩm mỹ và giá trị của đồ uống.',
    url: '/asset/tools/jigger.jpg',
    type: 2,
  },
  {
    id: 12,
    name: 'Bình Shaker',
    price: 200,
    description:
      'Bình Shaker là một thiết bị được sử dụng trong phòng thí nghiệm để pha trộn các dung dịch hoặc hóa chất. Nó có đầu pha trộn được gắn trên nắp bình và có một động cơ bên trong để tạo ra chuyển động rung động để pha trộn các chất trong bình. Bình Shaker được sử dụng rộng rãi trong nhiều lĩnh vực như hóa học, sinh học, y học và thực phẩm. Nó có thể được điều chỉnh để pha trộn với tốc độ khác nhau và được sản xuất trong các kích cỡ và kiểu dáng khác nhau để phù hợp với các yêu cầu của người dùng.',
    url: '/asset/tools/shaker.jpg',
    type: 2,
  },
  {
    id: 14,
    name: 'Muỗng Pha Chế',
    price: 200,
    description: 'Hi',
    url: '/asset/tools/muong.jpg',
    type: 2,
  },
  {
    id: 15,
    name: 'Ly Shot',
    price: 200,
    description: 'Hi',
    url: '/asset/tools/lyshot.jpg',
    type: 2,
  },
  {
    id: 16,
    name: 'Ly Thường',
    price: 200,
    description: 'Hi',
    url: '/asset/tools/lythuong.jpg',
    type: 2,
  },
];

export const AllShopItem = WineItem.concat(BartenderItem);

export type MenuItem = {
  id: number;
  grid: number;
  name: string;
  description: string;
  price: number;
  level: number;
};
export const DrinkMenu: MenuItem[] = [
  {
    id: 1,
    grid: 12,
    name: 'Bloody Mary',
    description:
      'grey goose, cold pressed vegetables, fennel salt, fresh horseradish, pickles',
    level: 15,
    price: 150,
  },
  {
    id: 2,
    grid: 6,
    name: 'Garibaldi',
    description: 'campari & fluffy orange',
    level: 15,
    price: 150,
  },
  {
    id: 3,
    grid: 6,
    name: 'Seasonal Bellini',
    description: 'frutti di bosco puree, rosé, prosecco, rose water spray',
    level: 17,
    price: 150,
  },
  {
    id: 4,
    grid: 12,
    name: 'Amalfi Limonata',
    description:
      'malfy lemon gin, limoncello, lemon curd, lemon juice, limonata soda',
    level: 17,
    price: 150,
  },
  {
    id: 5,
    grid: 6,
    name: 'Oxacan Sunrise',
    description: 'del maguey vida. fluffy orange. raspberry',
    level: 14,
    price: 150,
  },
  {
    id: 6,
    grid: 6,
    name: 'Breakfast Martin',
    description:
      'brooklyn gin. cafe sicilia marmalade. dry curacao. fresh citrus',
    level: 17,
    price: 150,
  },
  {
    id: 7,
    grid: 12,
    name: 'Salty Dog',
    description:
      'absolut. fluffy pink grapefruit. salted rosemary. black lava salt',
    level: 15,
    price: 150,
  },
];

export const FoodMenu: MenuItem[] = [
  {
    id: -1,
    grid: 12,
    name: 'Bánh Croissant',
    description: 'Ăn lúc vừa mới ra lò, cùng mứt dâu và được đánh bơ',
    level: 0,
    price: 120,
  },
  {
    id: -2,
    grid: 6,
    name: 'Bánh Scone',
    description: 'phục vụ kèm kem đông',
    level: 0,
    price: 120,
  },
  {
    id: -3,
    grid: 6,
    name: 'Bánh Chuối Nhà Làm',
    description: 'Nướng kèm mật ong',
    level: 0,
    price: 120,
  },
  {
    id: -4,
    grid: 6,
    name: 'Hạt Hướng Dương',
    description: 'Chỉ là hạt hướng dương thôi',
    level: 0,
    price: 30,
  },
  {
    id: -4,
    grid: 6,
    name: 'Bánh Pancake',
    description: 'Có quả mọng theo mùa, rưới thêm sữa chua cừu và syrup',
    level: 0,
    price: 150,
  },
];

export const Table: ItemData[] = [
  {
    id: -1,
    type: 3,
    price: 200,
    url: '',
    name: 'Bàn 1',
    description: '/asset/table.jpg',
  },
  {
    id: -2,
    type: 3,
    price: 150,
    url: '',
    name: 'Bàn 2',
    description: '/asset/table.jpg',
  },
  {
    id: -3,
    type: 3,
    price: 300,
    url: '',
    name: 'Bàn 3',
    description: '/asset/table.jpg',
  },
];
