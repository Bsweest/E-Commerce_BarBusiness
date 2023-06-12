export type ItemData = {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  type: number;
  type_of_wine?: string;
};

export const WineItem: ItemData[] = [
  {
    id: 1,
    name: 'Chivas 21 Năm Royal Salute',
    price: 2500,
    description:
      'Chivas 21 Royal Salute được dân sành rượu thế giới biết đến như một trong những loại Whisky Scotch thượng hạng nhất, được pha trộn và ủ trong những thùng gỗ sồi đặc trưng trong suốt 21 năm. Với bàn tay tài hoa của những người nghệ nhân gốm sứ, mẫu chai Chivas 21 được hoàn thiện với vẻ đẹp trường tồn và bất tử. Cho đến nay, đây vẫn là siêu phẩm Whisky hảo hạng, tôn vinh giá trị nhà Chivas Regal và xứng đáng có mặt trong bất cứ bộ sưu tập rượu ngoại nào.',
    url: '/asset/wine/chivas-21-nam-royal-salute-190.jpg',
    type: 1,
    type_of_wine: 'Whisky',
  },
  {
    id: 2,
    name: "Ballantine's Finest True Music",
    price: 400,
    description:
      "Ballantine's Finest True Music là một trong những dòng Whisky non trẻ đến từ Scotland - Thiên đường của những thương hiệu Whisky nổi tiếng toàn cầu. Thế nhưng, hương vị, màu sắc của sản phẩm lại chứa đựng những tinh hoa độc đáo. Sản phẩm chinh phục khẩu vị mọi quý ông khó tính, và được xếp loại thành một trong những phiên bản Whisky đình đám nhất hiện nay.",
    url: '/asset/wine/ballantines-finest-true-music-48.jpg',
    type: 1,
    type_of_wine: 'Whisky',
  },
  {
    id: 3,
    name: 'Johnnie Walker Blue Year Of Dog Chó F18',
    price: 4200,
    description:
      'RƯỢU JOHNNIE WALKER BLUE LABEL - YEAR OF DOG - TẾT MẬU TUẤT 2018 \n' +
      'JOHNNIE WALKER® BLUE LABEL™ là tuyệt phẩm với chất lượng không gì sánh bằng được. Chất rượu được chế tác từ những dòng Whisky quý hiếm với chất lượng vượt bậc. Chỉ 1 trong 10,000 thùng gỗ sồi mới đạt đủ phẩm chất để tạo nên hương vị tinh túy đặc trưng cho JOHNNIE WALKER® BLUE LABEL™ - Tuyệt phẩm quý hiếm dành cho những đêm tiệc đẳng cấp.\n' +
      'HƯƠNG VỊ CỦA RƯỢU JOHNNIE WALKER BLUE LABEL \n' +
      'JOHNNIE WALKER® BLUE LABEL™ đậm đà mang hương vị khói cá tính và một làn sóng tràn đầy những hương vị mạnh mẽ, sẽ vỡ tan thành những dư âm êm dịu kéo dài và đập tan những quy tắc cũ kĩ của nghệ thuật thưởng thức whisky. \n' +
      'Được chế tác từ những loại whisky quý hiếm hảo hạng, JOHNNIE WALKER® BLUE LABEL™ mang đến cho người thưởng thức những trải nghiệm hương vị khác biệt. Khởi đầu là hương hạt phỉ, mật ong, cam lan tỏa, theo sau là phức hợp hương đa dạng với chút gợi mở của hương gừng, tắc, hương gỗ đàn hương và sô-cô-la đen. Hương mật ong ngọt ngào rõ rệt đan xen trong thoáng hương tiêu, trái cây khô trước khi nhường chỗ cho dư vị kéo dài đầy quyến rũ của hương khói mượt mà cân bằng hoàn hảo.',
    url: '/asset/wine/johnnie-walker-blue-year-of-dog-cho-f18-391.jpg',
    type: 1,
    type_of_wine: 'Whisky',
  },
  {
    id: 4,
    name: 'Glenfiddich 15 Năm - Hộp Quà Tết 2022',
    price: 1800,
    description:
      'Phiên bản Glenfiddich 15 Năm hộp quà Tết 2022 được ra đời dựa trên thị hiếu của người tiêu dùng trong dịp lễ Tết, đặc biệt là Tết Nguyên đán 2022. Loại rượu Single Malt Scotch Whisky ngọt dịu, ấm áp được đặt trong hộp giấy sang trọng là món quà lý tưởng để biếu tặng cấp trên, người thân.',
    url: '/asset/wine/Glenfiddich-15-nam-01.jpg',
    type: 1,
    type_of_wine: 'Whisky',
  },
  {
    id: 5,
    name: 'Macallan Quest 1L Hộp Đỏ 2021',
    price: 2000,
    description:
      'Vốn đã nổi danh với những chai rượu tuyệt đỉnh, thương hiệu Macallan còn cho ra đời dòng Macallan Quest hộp đỏ 2021 hảo hạng đốn gục giới sành rượu. Từ thiết kế hộp đến màu sắc, hương vị của rượu đều khiến bất cứ ai từng thử qua đều phải nghiêng mình thán phục. Hãy cùng khám phá ngay dòng Macallan Quest hộp đỏ này xem nó đặc biệt như thế nào nhé! \n' +
      'Macallan Quest 1L 2021 là phiên bản mới nhất của chai rượu cùng tên, thuộc dòng Macallan Quest. Rượu được ủ trong 4 loại thùng gỗ sồi riêng biệt từ châu Âu, Mỹ,... Sự hoà lẫn của nó tạo nên loại Whisky mạch nha đơn có hương vị đầy tươi mới, đặc trưng của hương gỗ sồi cay, vani dịu ngọt cùng trái cây chua. Chính sự trộn lẫn đầy độc đáo này đã làm nên dòng rượu hảo hạng nổi danh khắp thế giới.',
    url: '/asset/wine/macallan-quest-1l-hop-do-2021-2386.jpg',
    type: 1,
    type_of_wine: '',
  },
  {
    id: 6,
    name: 'Hennessy VSOP Holidays - Hộp Quà Tết 2023',
    price: 1600,
    description:
      'Hennessy VSOP Holidays 2023 nằm trong bộ sưu tập Tết của thương hiệu Cognac trứ danh của nước Pháp. Phiên bản này sở hữu vẻ ngoài bắt mắt với sắc đỏ rực rỡ. Cùng với đó là hương vị Cognac thơm ngon tràn ngập vị trái cây, mật ong và gỗ sồi. Đây sẽ là món quà Tết thể hiện được trọn vẹn thành ý của bạn dành cho người nhận. \n' +
      'Phiên bản này sử dụng chai đựng thủy tinh cao cấp với thiết kế lạ mắt, thuôn gọn dần về cổ chai. Logo của thương hiệu được khắc nổi trên thân chai giúp người tiêu dùng dễ dàng nhận diện sản phẩm của Hennessy. Từ nắp chai, nhãn mác đến hộp đựng đều sử dụng sắc đỏ rực rỡ. Theo văn hóa phương Đông, màu đỏ là tượng trưng cho sự may mắn, tốt lành và hạnh phúc nên mọi người thường lựa chọn quần áo, đồ trang trí màu đỏ trong dịp Tết. Hiểu được ý nghĩa đó, Hennessy đã lựa chọn màu sắc này trong phiên bản Hennessy VSOP Holidays 2023 với mong muốn người sở hữu nó luôn gặp may mắn, bình an trong cuộc sống.',
    url: '/asset/wine/Hennessy-VSOP-Holidays-1.jpg',
    type: 1,
    type_of_wine: 'Cogna',
  },
  {
    id: 7,
    name: 'Martell Cordon Bleu - Tết 2023',
    price: 1500,
    description:
      'Kể từ lúc được sáng tạo bởi Edouard Martell vào năm 1912, Cordon Bleuđã trở thành 1 huyền thoại thực sự. Hương vị của loại rượu này được đánh giá trội hơn hẳn các loại khác trong vùng Borderies, với việc giữ lại sự thiết kế của vỏ chai kể từ lúc được sáng tạo ra, Cordon Bleu mang dáng vẻ cổ điển giữa những loại Cognac danh tiếng khác. Là loại Cognac dành cho những người sành điệu.',
    url: '/asset/wine/martell-cordonblue-1.jpg',
    type: 1,
    type_of_wine: 'Cogna',
  },
  {
    id: 8,
    name: 'Remy Martin 1738 - Hộp Quà Tết 2023',
    price: 2300,
    description:
      'Bạn có biết năm 1738 - năm đánh dấu một trong những sự kiện làm thay đổi hoàn toàn lịch sử của rượu? Chính vào năm này, vua Louis đã ban cho nhà Remy một đặc ân được mở rộng vườn nho của mà mình để tiến hành ủ rượu. Remy Martin 1738 đã được đặt tên nhằm tôn vinh vinh dự mà nhà Remy nhận được từ Hoàng gia của vua Louis XV. \n' +
      'Từ đó rượu Remy Martin 1738 dần dần bắt rễ sâu vào trong lãnh thổ và truyền thống của nhà nhà Remy Martin. Remy Martin 1738 2023 được chế tác với tỉ lệ cao và vô cùng đặc biệt “eaux-de-vie” lâu năm cho ra thành phẩm là hương vị phong phú và mạnh mẽ chưa từng có. \n' +
      'Remy Martin 1738 2023 có mùi hương là sự kết hợp tuyệt vời của mận và mứt cam, kết hợp cùng hương gỗ sồi nồng ấm, thêm một chút ngọt ngào từ kẹo bơ cứng và bánh mì nướng cho ra lò siêu phẩm tuyệt vời mà ai cũng chìm đắm. Hãy thử ngay mùi hương này bằng cách sở hữu ngay cho mình một chai rượu Remy Martin 1738 2023 ngay hôm nay.',
    url: '/asset/wine/Remy-Martin-1738-Limited-Edition-Speaker-Box-0.jpg',
    type: 1,
    type_of_wine: 'Cogna',
  },
  {
    id: 9,
    name: 'Hennessy VS Les Twins - Song Sinh - Tết 2022',
    price: 800,
    description:
      'Nhắc đến Hennessy người ta sẽ nghĩ ngay đến thương hiệu rượu Cognac làm nức lòng biết bao người sành rượu trên toàn thế giới. Đây cũng là thương hiệu rượu nổi tiếng bậc nhất tại Pháp với lịch sử phát triển hơn 200 năm.',
    url: '/asset/wine/hennessy-twins-vs-2022-3.jpg',
    type: 1,
    type_of_wine: 'Cogna',
  },
  {
    id: 10,
    name: 'Remy Martin VSOP Limited - Hộp Quà Tết 2022',
    price: 1550,
    description:
      'Remy Martin VSOP Limited hộp quà Tết 2022 đang được nhiều khách hàng của Rượu Tây Chính Hãng đặt mua để làm quà tặng cho đối tác, người thân trong dịp Tết 2022. Hộp quà cao cấp, sang trọng không những thể hiện sự chu đáo của người tặng mà còn mang ý nghĩa chúc năm mới ngập tràn may mắn, thành công.',
    url: '/asset/wine/remymartin2022-1.jpg',
    type: 1,
    type_of_wine: 'Cogna',
  },
  {
    id: 11,
    name: 'Martell Cordon Bleu Intense Heat Cask Finish',
    price: 4900,
    description:
      'Martell Cordon Blue đã được sáng tạo bởi Edouard Martell, cháu cố của nhà sáng lập vào năm 1912. Được đặt tên sau bãi ruy băng xanh dương, biểu tượng quốc tế của sự xuất sắc, Martell Cordon Blue là hiện thân của sự thhanh lịch và phức hợp hương vị. \n' +
      'Luôn được chú ý vì sự dày dặn, sang trọng và tinh tế, Martell Cordon Blue được phối trộn từ hơn 100 loại rượu tâm, mà trong đó, những hương vị đầy hương hoa đến từ những dòng rượu tâm cao quí vùng Borderies.',
    url: '/asset/wine/martell-cordon-bleu-intense-heat-cask-finish-475.jpg',
    type: 1,
    type_of_wine: 'Cogna',
  },
  {
    id: 12,
    name: 'Absolut Elyx',
    price: 1500,
    description:
      'Absolut Elyx mang danh là dòng vodka được chế tác thủ công (handcraft vodka), thừa hưởng và nắm bắt mọi sự tinh túy trong di sản của nền sản xuất vodka lò Absolut. \n' +
      'Rượu được chưng cất từ những lò nấu bằng đồng có từ 1929, và được vận hành hoàn toàn bằng tay từ chỉ rất ít người có sự am hiểu kiến thức, kỹ thuật và sự lành nghề được thừa hưởng qua nhiều thế hệ sản xuất vodka.',
    url: '/asset/wine/absolut-elyx-11.jpg',
    type: 1,
    type_of_wine: 'Vodka',
  },
  {
    id: 13,
    name: 'Absolut Grapefruit 1L',
    price: 550,
    description:
      'Absolut Elyx mang danh là dòng vodka được chế tác thủ công (handcraft vodka), thừa hưởng và nắm bắt mọi sự tinh túy trong di sản của nền sản xuất vodka lò Absolut. \n' +
      'Rượu được chưng cất từ những lò nấu bằng đồng có từ 1929, và được vận hành hoàn toàn bằng tay từ chỉ rất ít người có sự am hiểu kiến thức, kỹ thuật và sự lành nghề được thừa hưởng qua nhiều thế hệ sản xuất vodka.',
    url: '/asset/wine/d68bc3f2d9ba45809265829202e46d88.jpg',
    type: 1,
    type_of_wine: 'Vodka',
  },
  {
    id: 14,
    name: 'Absolut Vodka Blue Facet',
    price: 600,
    description:
      'Hình dáng chai Absolut Vodka là một biểu tượng sáng tạo kể từ năm 1979, cảm hứng từ chai nước biển \n' +
      'Mang hình ảnh nhà sáng lập Lars Olsson Smith, Absolut Vodka luôn tự hào về nguồn gốc vodka từ Thụy Điển, chứa đựng những tinh hoa của nền sản xuất vodka vùng Bắc Âu với chất lượng vượt trội, thượng hạng và được đón chào nồng nhiệt khắp nơi trên toàn thế giới. \n' +
      'Absolut Blue Facet là phiên bản giới hạn, được lấy cảm hứng từ lăng kính quang học và các khía cạnh. Các mô hình bất đối xứng của các khía cạnh là một hiện đại trên một lăng kính và là tượng trưng cho các góc độ khác nhau và bất ngờ của cuộc sống về đêm.',
    url: '/asset/wine/absolut-vodka-blue-facet-24.jpg',
    type: 1,
    type_of_wine: 'Vodka',
  },
  {
    id: 15,
    name: 'Absolut Vodka Raspberri (Dâu)',
    price: 400,
    description:
      'Absolut Raspberry được sản xuất độc quyền từ các nguyên liệu tự nhiên, không như các loại vodka có mùi hương khác, nó không chứa thêm bất cứ lượng đường nào.',
    url: '/asset/wine/absolut-raspberri-vodka-dau-18.jpg',
    type: 1,
    type_of_wine: 'Vodka',
  },
  {
    id: 16,
    name: "Jacob's Creek Double Barrel - Hộp Quà Tết 2023",
    price: 800,
    description: "Jacob's Creek Double Barrel - Hộp Quà Tết 2023",
    url: '/asset/wine/jacob-double-1.jpg',
    type: 1,
    type_of_wine: 'Champagne',
  },
  {
    id: 17,
    name: "Penfolds Max's Shiraz 2020",
    price: 1150,
    description: "Penfolds Max's Shiraz 2020",
    url: '/asset/wine/ee90478f8a53466088bad90745b4e46e.jpg',
    type: 1,
    type_of_wine: 'Champagne',
  },
];

export const BartenderItem: ItemData[] = [
  {
    id: -1,
    name: 'Đong rượu Jigger',
    price: 200,
    description:
      'Jigger là một công cụ đo lường trong ngành nghề pha chế đồ uống, thường được sử dụng để đo lượng rượu, nước hoa quả, đường và các thành phần khác để tạo ra các loại cocktail hoặc đồ uống khác. Jigger thường có hình dạng hình nón và có các đường thước đo khác nhau trên hai đầu của nó để đo lượng chất lỏng khác nhau. Các đơn vị đo thông thường của jigger là ounce và ml. Jigger là một công cụ quan trọng giúp cho việc pha chế đồ uống được chính xác và đồng đều, giúp tăng tính thẩm mỹ và giá trị của đồ uống.',
    url: '/asset/tools/jigger.jpg',
    type: 2,
  },
  {
    id: -2,
    name: 'Bình Shaker',
    price: 200,
    description:
      'Bình Shaker là một thiết bị được sử dụng trong phòng thí nghiệm để pha trộn các dung dịch hoặc hóa chất. Nó có đầu pha trộn được gắn trên nắp bình và có một động cơ bên trong để tạo ra chuyển động rung động để pha trộn các chất trong bình. Bình Shaker được sử dụng rộng rãi trong nhiều lĩnh vực như hóa học, sinh học, y học và thực phẩm. Nó có thể được điều chỉnh để pha trộn với tốc độ khác nhau và được sản xuất trong các kích cỡ và kiểu dáng khác nhau để phù hợp với các yêu cầu của người dùng.',
    url: '/asset/tools/shaker.jpg',
    type: 2,
  },
  {
    id: -3,
    name: 'Muỗng Pha Chế',
    price: 200,
    description: 'Hi',
    url: '/asset/tools/muong.jpg',
    type: 2,
  },
  {
    id: -4,
    name: 'Ly Shot',
    price: 200,
    description: 'Hi',
    url: '/asset/tools/lyshot.jpg',
    type: 2,
  },
  {
    id: -5,
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
    id: 0,
    type: 3,
    price: 200,
    url: '',
    name: 'Bàn 1',
    description: '/asset/table.jpg',
  },
  {
    id: 0,
    type: 3,
    price: 150,
    url: '',
    name: 'Bàn 2',
    description: '/asset/table.jpg',
  },
  {
    id: 0,
    type: 3,
    price: 300,
    url: '',
    name: 'Bàn 3',
    description: '/asset/table.jpg',
  },
];
