package com.example.johan.myapplication.models;

public class Commande {
    private int idCommande;
    private float prixTotal;
    private String adresse;
    private String codePostal;
    private String ville;

    public Commande(int idCommande, float prixTotal, String adresse, String codePostal, String ville) {
        this.idCommande = idCommande;
        this.prixTotal = prixTotal;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.ville = ville;
    }

    public int getIdCommande() {
        return idCommande;
    }

    public void setIdCommande(int idCommande) {
        this.idCommande = idCommande;
    }

    public float getPrixTotal() {
        return prixTotal;
    }

    public void setPrixTotal(float prixTotal) {
        this.prixTotal = prixTotal;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getCodePostal() {
        return codePostal;
    }

    public void setCodePostal(String codePostal) {
        this.codePostal = codePostal;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }
}
