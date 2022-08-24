<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ItemPenjualan;

class ItemPenjualanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return ItemPenjualan::all();
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
        $itemPenjualan = new ItemPenjualan();
        $itemPenjualan->id_nota = $request->id_nota;
        $itemPenjualan->kode_barang = $request->kode_barang;
        $itemPenjualan->qty = $request->qty;
        $itemPenjualan->save();
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
        return ItemPenjualan::find($id);
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
        $itemPenjualan = ItemPenjualan::find($id);
        $itemPenjualan->id_nota = $request->id_nota;
        $itemPenjualan->kode_barang = $request->kode_barang;
        $itemPenjualan->qty = $request->qty;
        $itemPenjualan->save();
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
        return ItemPenjualan::find($id)->delete();
    }
}
