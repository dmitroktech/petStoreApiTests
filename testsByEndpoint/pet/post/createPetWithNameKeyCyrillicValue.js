// Name of check: createPetWithNameKeyCyrillicValue
// Tests:
let schema = { "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "name": {
      "type": "string"
    },
    "photoUrls": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        }
      }
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "photoUrls"
  ]
};
//Проверяю схему с 200-ым статус кодом 
pm.test('Проверка JSON схемы ответа', function(){
  pm.response.to.have.jsonSchema(schema);
});

pm.test('Время ответа от сервера не превышает 1000ms' , function() {
  pm.expect(pm.response.responseTime).to.be.below(1000);
});
