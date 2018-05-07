package com.example.johan.myapplication;

import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;

public class CommandeAdapter extends ArrayAdapter<Commande> {
    //Commandes est la liste des models à afficher

    public CommandeAdapter(Context context, List<Commande> commandes) {
        super(context, 0, commandes);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        if(convertView == null){
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.row_layout,parent, false);
        }

        CommandeViewHolder viewHolder = (CommandeViewHolder) convertView.getTag();
        if(viewHolder == null){
            viewHolder = new CommandeViewHolder();
            viewHolder.numero = (TextView) convertView.findViewById(R.id.numero);
            viewHolder.adresse = (TextView) convertView.findViewById(R.id.adresse);
            viewHolder.ordreLiv = (TextView) convertView.findViewById(R.id.ordreLiv);
            convertView.setTag(viewHolder);
        }

        //getItem(position) va récupérer l'item [position] de la List<Commande> Commandes
        Commande cmd = getItem(position);

        //il ne reste plus qu'à remplir notre vue
        viewHolder.numero.setText("#"+cmd.getId());
        viewHolder.adresse.setText(cmd.getAdresse());
        viewHolder.ordreLiv.setText(""+cmd.getOrdre());

        return convertView;
    }

    private class CommandeViewHolder{
        public TextView numero;
        public TextView adresse;
        public TextView ordreLiv;
    }
}
