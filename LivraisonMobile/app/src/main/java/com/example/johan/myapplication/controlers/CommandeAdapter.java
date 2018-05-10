package com.example.johan.myapplication.controlers;

import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.johan.myapplication.R;
import com.example.johan.myapplication.models.Commande;

import java.util.List;

public class CommandeAdapter extends ArrayAdapter<Commande> {
    private List<Commande> values;
    private Context context;

    public CommandeAdapter(Context context, List<Commande> values) {
        super(context, R.layout.row_layout, values);

        this.context = context;
        this.values = values;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View row = convertView;

        if (row == null) {
            LayoutInflater inflater =
                    (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            row = inflater.inflate(R.layout.row_layout, parent, false);
        }


        TextView adresse = (TextView) row.findViewById(R.id.adresse);
        TextView numero = (TextView) row.findViewById(R.id.numero);
        TextView ordreLiv = (TextView) row.findViewById(R.id.ordreLiv);

        Commande item = values.get(position);
        String pAdresse = item.getAdresse() + " " + item.getCodePostal() + " " + item.getVille();
        adresse.setText(pAdresse);
        String pNum = "#" + item.getIdCommande();
        numero.setText(pNum);
        String pOrdre = "" + item.getPrixTotal();
        ordreLiv.setText(pOrdre);


        return row;
    }
}
