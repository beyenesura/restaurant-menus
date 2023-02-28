const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const restaurant = await Restaurant.create({
      name: 'Pizza Palace',
      address: '123 Main St',
      phone: '555-1234',
      website: 'http://pizzapalace.com',
    });
    expect(restaurant.id).toBeDefined();
    expect(restaurant.name).toBe('Pizza Palace');
  });

    test('can create a Menu', async () => {
        // TODO - write test
        const restaurant = await Restaurant.findOne({ where: { name: 'Pizza Palace' } });
    const menu = await Menu.create({
      title: 'Pizza Menu',
      description: 'Our famous pizza menu',
      RestaurantId: restaurant.id,
    });
    expect(menu.id).toBeDefined();
    expect(menu.title).toBe('Pizza Menu');
  });

    test('can find Restaurants', async () => {
        // TODO - write test
      const restaurants = await Restaurant.findAll();
    expect(restaurants.length).toBeGreaterThan(0);
  });

    test('can find Menus', async () => {
        // TODO - write test
       const menus = await Menu.findAll();
    expect(menus.length).toBeGreaterThan(0);
  });

    test('can delete Restaurants', async () => {
        // TODO - write test
       const restaurant = await Restaurant.findOne({ where: { name: 'Pizza Palace' } });
    await restaurant.destroy();
    const deletedRestaurant = await Restaurant.findOne({ where: { name: 'Pizza Palace' } });
    expect(deletedRestaurant).toBeNull();
  });
});


