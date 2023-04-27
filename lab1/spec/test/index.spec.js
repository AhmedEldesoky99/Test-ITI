const { User } = require('../../jasmineLab');

describe('here we test User', function () {
  let user;
  beforeEach(function () {
    user = new User('Ahmed', 123);
  });
  describe('here we test addToCart', function () {
    it('should add a product to the cart', function () {
      const product1 = {
        name: 'prod1',
        price: 100,
      };
      const product2 = {
        name: 'prod2',
        price: 200,
      };
      user.addToCart(product1);
      user.addToCart(product2);
      expect(user.cart.length).toBe(2);
      expect(user.cart[0]).toEqual(jasmine.any(Object));
      expect(user.cart[0].name).toEqual(jasmine.any(String));
      expect(user.cart[0].price).toEqual(jasmine.any(Number));
      expect(user.calculateTotalCartPrice()).toBe(300);
    });
  });

  describe('here we test checkout', () => {
    // let paymentModel, deliveyOrder;
    // beforeEach(() => {
    //   paymentModel = {
    //     goToVerifyPage: jasmine.createSpy("goToVerifyPage"),
    //     returnBack: jasmine.createSpy("returnBack"),
    //     isVerify: jasmine.createSpy("isVerify"),
    //   };
    //   deliveyOrder = jasmine.createSpy("deliveyOrder");
    // });

    it('should be delivery operation and retrun true if payment is verified', () => {
      let fakeObj = jasmine.createSpyObj([
        'goToVerifyPage',
        'returnBack',
        'isVerify',
      ]);
      fakeObj.isVerify.and.returnValue(true);
      let fakeFunction = jasmine.createSpy('deliveyOrder');
      const res = user.checkout(fakeObj, fakeFunction);
      expect(fakeObj.goToVerifyPage).toHaveBeenCalled();
      expect(fakeObj.returnBack).toHaveBeenCalled();
      expect(fakeObj.isVerify).toHaveBeenCalled();
      expect(fakeFunction).toHaveBeenCalled();
      expect(res).toBe(true);
    });

    it('should return false if payment not verified', () => {
      let fakeObj = jasmine.createSpyObj([
        'goToVerifyPage',
        'returnBack',
        'isVerify',
      ]);
      fakeObj.isVerify.and.returnValue(false);
      let fakeFunction = jasmine.createSpy('deliveyOrder');
      const res = user.checkout(fakeObj, fakeFunction);
      expect(fakeFunction).not.toHaveBeenCalled();
      expect(res).toBe(false);
    });
  });
});
