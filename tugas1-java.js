<body>
	<script language="javascript">
		var name = "rizki";
		var jabatan ="manager";
		var status = "menikah";
		document.write( "nama: " + name +
		"<br/>Jabatan: " + jabatan +
		"<br/>Status: " + status);
	</script>
	<table align="center" border="1" cellpadding="10" cellspacing="0"
		width="40%">
		<thead>
			<tr bgcolor="tomato">
				<th>DATA</th>
				<th>Keterangan</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Gaji pokok</td>
				<td>
					<script language="javascript">
						if(jabatan=='manager'){
							gaji=15000000;
						}
						else if(jabatan=='assiten manager'){
							gaji = 10000000;
						}
						else if(jabatan=='staff'){
							gaji= 5000000;
						}
						else{
							gaji= 0;
						}
						document.write( gaji);
					</script>
				</td>
			</tr>
			<tr>
				<td>tunjangan jabatan</td>
				<td>
					<script language="javascript">
						let tunja = 0.15 * gaji;
						document.write( tunja);
					</script>
				</td>
			</tr>
			<tr>
				<td>BPJS</td>
				<td>
					<script language="javascript">
						let BPJS = 0.1 * gaji;
						document.write( BPJS);
					</script>
				</td>
			</tr>
			<tr>
				<td>Tunjangan Keluarga</td>
				<td>
					<script language="javascript">
						tunke =(status=='menikah')? 0.2 * gaji : 0;
						document.write( tunke);
					</script>
				</td>
			</tr>
		</tbody>
		<tfoot>
			<tr bgcolor="orange">
				<th>Total gaji</th>
				<th>
					<script language="javascript">
						total = gaji + tunja + BPJS + tunke;
						document.write( total);
					</script>
				</th>
			</tr>
		</tfoot>
	</table>
</body><body>
	<script language="javascript">
		var name = "rizki";
		var jabatan ="manager";
		var status = "menikah";
		document.write( "nama: " + name +
		"<br/>Jabatan: " + jabatan +
		"<br/>Status: " + status);
	</script>
	<table align="center" border="1" cellpadding="10" cellspacing="0"
		width="40%">
		<thead>
			<tr bgcolor="tomato">
				<th>DATA</th>
				<th>Keterangan</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Gaji pokok</td>
				<td>
					<script language="javascript">
						if(jabatan=='manager'){
							gaji=15000000;
						}
						else if(jabatan=='assiten manager'){
							gaji = 10000000;
						}
						else if(jabatan=='staff'){
							gaji= 5000000;
						}
						else{
							gaji= 0;
						}
						document.write( gaji);
					</script>
				</td>
			</tr>
			<tr>
				<td>tunjangan jabatan</td>
				<td>
					<script language="javascript">
						let tunja = 0.15 * gaji;
						document.write( tunja);
					</script>
				</td>
			</tr>
			<tr>
				<td>BPJS</td>
				<td>
					<script language="javascript">
						let BPJS = 0.1 * gaji;
						document.write( BPJS);
					</script>
				</td>
			</tr>
			<tr>
				<td>Tunjangan Keluarga</td>
				<td>
					<script language="javascript">
						tunke =(status=='menikah')? 0.2 * gaji : 0;
						document.write( tunke);
					</script>
				</td>
			</tr>
		</tbody>
		<tfoot>
			<tr bgcolor="orange">
				<th>Total gaji</th>
				<th>
					<script language="javascript">
						total = gaji + tunja + BPJS + tunke;
						document.write( total);
					</script>
				</th>
			</tr>
		</tfoot>
	</table>
</body>