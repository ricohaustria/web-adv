//# sourceURL=crud.js

function getVouchers() {
  debugger;

  var url = 'http://localhost:3000/vouchers';
  $.ajax({
    type: 'GET',
    url: url,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(msg) {
      console.log('query successful, data received: ' + JSON.stringify(msg));
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function getVoucher() {
  debugger;

  var url = 'http://localhost:3000/vouchers/1';
  $.ajax({
    type: 'GET',
    url: url,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(msg) {
      console.log('query successful, data received: ' + JSON.stringify(msg));
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function insertVoucher() {
  debugger;

  var url = 'http://localhost:3000/vouchers';
  var data = JSON.stringify({ Text: 'Inserted by WebApi', Date: new Date() });

  $.ajax({
    type: 'POST',
    data: data,
    url: url,
    contentType: 'application/json; charset=utf-8',
    success: function(msg) {
      console.log('query successful, data received: ' + JSON.stringify(msg));
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function updateVoucher() {
  debugger;

  var id = 1003;
  var url = 'http://localhost:3000/vouchers/' + id;
  var vtu = JSON.stringify({
    ID: id,
    Text: 'Updated by WebApi',
    Date: '2016-04-22T16:59:32.086',
    Amount: 99,
    Paid: true,
    Expense: false
  });
  $.ajax({
    type: 'PUT',
    data: vtu,
    url: url,
    contentType: 'application/json; charset=utf-8',
    success: function(msg) {
      console.log('query successful, voucher updated - id:' + id);
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function deleteVoucher() {
  debugger;

  var id = 3003;
  var url = 'http://localhost:3000/vouchers/' + id;
  $.ajax({
    type: 'DELETE',
    url: url,
    contentType: 'application/json; charset=utf-8',
    success: function(msg) {
      console.log('query successful, voucher deleted');
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function usingFetch() {
  debugger;

  fetch(this.url)
    .then(resp => {
      console.log('Response received from fetch', resp);
      return resp.json();
    })
    .then(data => {
      console.log('Data received from fetch', data);
    });
}

function postFetch() {
  debugger;

  let vouchersapi = 'https://localhost:5000http://localhost:3000/vouchers';

  let data = {
    Date: '01.01.2016',
    Amount: 100,
    Text: 'Posted Voucher',
    Paid: false
  };

  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  fetch(vouchersapi, options)
    .then(function(res) {
      if (res.ok) {
        return res.statusText;
      } else {
        throw Error(`Request rejected with status ${res.status}`);
      }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function usingFetchAwait() {
  debugger;
  async function getFetchedVouchers() {
    let response = await fetch('demos/vouchers.json');
    let voucher = await response.json();
    console.log('Data received using fetch - await');
    console.log(voucher);
  }

  getFetchedVouchers();
}
