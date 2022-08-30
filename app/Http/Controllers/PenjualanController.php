<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Penjualan;
use App\ItemPenjualan;
use DB;


class PenjualanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Penjualan::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $penjualan = new Penjualan();
        $penjualan->tanggal = $request->tanggal;
        $penjualan->kode_pelanggan = $request->kode_pelanggan;
        $penjualan->sub_total = $request->sub_total;
        $penjualan->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        $result = Penjualan::find($id);
        $result->detail = ItemPenjualan::where('id_nota',$id)
            ->join('barang','barang.kode','item_penjualan.kode_barang')
            ->select(
                "item_penjualan.qty",
                "barang.nama",
                DB::raw("(item_penjualan.qty * barang.harga) AS `total_harga`")
            )
            ->get();
        return $result;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $penjualan = Penjualan::find($id);
        $penjualan->tanggal = $request->tanggal;
        $penjualan->kode_pelanggan = $request->kode_pelanggan;
        $penjualan->sub_total = $request->sub_total;
        $penjualan->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        return Penjualan::find($id)->delete();
    }
}
