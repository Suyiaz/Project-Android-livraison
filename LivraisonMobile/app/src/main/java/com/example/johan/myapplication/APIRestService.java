package com.example.johan.myapplication;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface APIRestService {
    public static final String ENDPOINT = "https://localhost:3000";

    @GET("users/{user}/repos")
    Call<List<Client>> infoClient(@Path("user") String user);

    @GET("client/{id}")
    Call<List<Client>> clients (@Path("id") int id);
}
