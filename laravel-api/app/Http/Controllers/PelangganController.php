<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pelanggan;


class PelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Pelanggan::all();
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
        $pelanggan = new Pelanggan();
        $pelanggan->nama = $request->nama;
        $pelanggan->domisili = $request->domisili;
        $pelanggan->jenis_kelamin = $request->jenis_kelamin;
        $pelanggan->save();
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
        return Pelanggan::find($id);
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
        $pelanggan = Pelanggan::find($id);
        $pelanggan->nama = $request->nama;
        $pelanggan->domisili = $request->domisili;
        $pelanggan->jenis_kelamin = $request->jenis_kelamin;
        $pelanggan->save();
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
        return Pelanggan::find($id)->delete();
    }
}
