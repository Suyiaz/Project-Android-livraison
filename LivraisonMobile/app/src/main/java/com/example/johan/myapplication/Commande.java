package com.example.johan.myapplication;

public class Commande {

    private float prix;
    private int ordre;
    private int id;
    private String adresse;

    public Commande(float prix, int ordre, int id, String adresse ){
        this.prix = prix;
        this.ordre = ordre;
        this.id = id;
        this.adresse = adresse;
    }

    public float getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }

    public int getOrdre() {
        return ordre;
    }

    public void setOrdre(int ordre) {
        this.ordre = ordre;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        adresse = adresse;
    }
}
