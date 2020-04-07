//= require jquery

$(document).ready(function(){

	$('input').click(function(){
		$(this).select();
	});

	$('#9').blur(update_balance);

	$('#addrow').click(function(){
		$('.item-row:last').after('<tr class="item-row"><td><select name="pid[]" class="form-control item_name form-control-lg" placeholder="Item name"<option>Cable tube stripper 45-163</option><option>DEVISER Optical power meter AE270</option><option>DEVISER Optical light source LS310A</option><option>ELOIK Splicing machine ALK-88A</option><option>ELOIK Splicing machine ALK-A3</option><option>Manual Microscope 400x magnification</option><option>Tri-hole stripper</option></select></td><td><select name="pid[]" class="form-control item_desc form-control-lg" placeholder="Item description" <option>921</option><option>23306</option><option>23307</option><option>23309</option><option>23310</option><option>23311</option><option>23312</option><option>23313</option><option>23314</option><option>23317</option><option>23318</option><option>23319</option><option>23320</option><option>23321</option><option>1001670403</option><option>1001780403</option><option>1001870403</option><option>1001880403</option><option>1001890403</option><option>1001900403</option><option>1001910403</option><option>1001920403</option><option>1001940403</option><option>1001883250</option><option>1001903250</option><option>1001913250</option><option>1001953250</option><option>1002003250</option><option>1002063250</option><option>1002073250</option><option>1002093250</option><option>1002073250</option><option>1002093250</option><option>1002133250</option></select></td><td><input class="form-control cost" value="0.00" /></td><td><input class="form-control qty" value="0" /></td><td class="price_td"><span class="price">0.00</span><span class="subtotal_currency"></span></td><td class="delete_td"><a class="delete" href="javascript:;" title="Remove row"><span class="fas fa-window-close"></span></a></td></tr>');
		if ($('.delete').length > 0) $('.delete').show();
		bind1();
	});
	bind1();

	$('body').on('click', '.delete', function(){
		$(this).parents('.item-row').remove();
		update_subtotal();
		if ($('.delete').length < 2) $('.delete').hide();
	});

	$('body').on('keyup', '#invoice_currency', function(){
		var c = $(this).val();
		$('.subtotal_currency').empty();
		$('.subtotal_currency').append(" " + c);
	});

	$('body').on('click', '#submit_invoice', function(){
		var e = $('#invoice_total').text();
		$('#invoice_total1').empty();
		$('#invoice_total1').val(Number(e));
	});

	$('body').on('click', '#invoice_button', function(){
		for (var i =1; i < 11; i++){
			var id = i.toString();
			bind($('#' + id), $("#modal_" + id));
		}

		bind2($('#subtotal'), $("#modal_subtotal"));
		bind2($('#invoice_number'), $("#modal_invoice_number"));

		var rows = $('.item-row');
		$("#modal_tbody").empty();

		for (i = 0; i < rows.length; i++){
			var row = rows[i];
			var name = $(row).find(".item_name").val();
			$('#modal_tbody').append('<tr class="modal-item-row"></tr>');
			$('.modal-item-row:last').append('<td>' + name + '</td>');

			var desc = $(row).find(".item_desc").val();
			$('.modal-item-row:last').append('<td>' + desc + '</td>');

			var cost = $(row).find(".cost").val();
			$('.modal-item-row:last').append('<td>' + cost + '</td>');

			var qty = $(row).find(".qty").val();
			$('.modal-item-row:last').append('<td>' + qty + '</td>');

			var price = $(row).find(".price").text();
			var curr = $('#invoice_currency').val();
			$('.modal-item-row:last').append('<td>' + price + ' ' + '<span>' + curr + '</span></td>');
		}

	});
});