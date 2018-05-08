package com.example.johan.myapplication;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

public class DetailCommandeActivity extends AppCompatActivity {
    private Commande cmd;
    private Client c;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.detail_commande);

        Bundle bundle = getIntent().getExtras();
        //tester si la valeur récupéré existe dans la base de données
        TextView tx = findViewById(R.id.txtIdCmd);
        tx.setText("#"+bundle.getInt("idCmd"));

        //rechercher le détails de la commande depuis l'id de la commande dans la BDD
        cmd = new Commande(20.5F,5,365478,"5 rue Arthur Rimbaud 31200 Toulouse");
        c = new Client("Marley","Bob","","0564785856");

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fabPhone);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
//                        .setAction("Action", null).show();
                Intent phoneIntent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + c.getTelephone()));
                startActivity(phoneIntent);
            }
        });
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.action_bar_navigation, menu);
        MenuItem item = menu.findItem(R.menu.action_bar_navigation);
//        item.setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
//            @Override
//            public boolean onMenuItemClick(MenuItem item) {
//                Intent intent = new Intent(android.content.Intent.ACTION_VIEW, Uri.parse("google.navigation:q=" + cmd.getAdresse()));
//                startActivity(intent);
//                return true;
//            }
//        });
        return true;
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        //  item selection
        switch (item.getItemId()) {
            case R.id.action_naviguation:
                //Toast.makeText(getBaseContext(),"heheheh",Toast.LENGTH_SHORT);
                Intent mapsIntent = new Intent(android.content.Intent.ACTION_VIEW, Uri.parse("google.navigation:q=" + cmd.getAdresse()));
                startActivity(mapsIntent);
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }



}
