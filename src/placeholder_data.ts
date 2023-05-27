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

export const BartenderItem: ItemData[] = [];

export const MenuBoard: ItemData[] = [];
