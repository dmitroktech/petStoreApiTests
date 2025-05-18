// Name of check: createPetWithNameKeyNumericValue

// Tests:

pm.test("Время ответа от сервера не превышает 1000ms" , function() {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});
