package com.example.johan.myapplication.controlers;

import com.example.johan.myapplication.models.Client;
import com.example.johan.myapplication.models.Commande;
import com.example.johan.myapplication.models.Livreur;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface APIRestService {

    public static final String ENDPOINT = "http://192.168.1.53:3000/";

    @GET("client/{id}")
    Call<Client> infoClient(@Path("id") String id);

    @GET("tournee/{id}")
    Call<List<Commande>> listeCommandes(@Path("id") int id);

    @GET("livreur/{id}")
    Call<Livreur> infoLivreur(@Path("id") String id);

    @GET("commande/{id}")
    Call<Livreur> infoCommande(@Path("id") String id);
}
