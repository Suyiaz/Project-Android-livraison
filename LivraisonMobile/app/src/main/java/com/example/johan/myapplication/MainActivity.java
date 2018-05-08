package com.example.johan.myapplication;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    ListView mListView;
    private List<Commande> listCommande = new ArrayList<Commande>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        //ajouter des commandes à une liste
        listCommande.add(new Commande(35.25F,1,36545,"3 rue des pins"));
        listCommande.add(new Commande(30.25F,2,36589,"6 Rue du thor"));
        listCommande.add(new Commande(20.00F,3,37589,"6 Avenue de la Halle"));
        listCommande.add(new Commande(15.00F,4,38697,"154 Rue Voltaire"));

        //ajouter des items dans la list view
        mListView = (ListView) findViewById(R.id.listviewCommandes);

        CommandeAdapter adapter = new CommandeAdapter(MainActivity.this, listCommande);
        mListView.setAdapter(adapter);

        mListView.setOnItemClickListener(new AdapterView.OnItemClickListener(){
            @Override
            public void onItemClick(AdapterView<?> adapter, View view, int position, long id) {
                Commande item = (Commande) adapter.getItemAtPosition(position);

                Intent intent = new Intent(MainActivity.this,DetailCommandeActivity.class);
                intent.putExtra("idCmd",item.getId());
                //based on item add info to intent
                startActivity(intent);
            }
        });
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_finish) {
            confirmerMessage("Confirmation", "Etes-vous sûr de vouloir valider les commandes ?");
            return true;
        }
        if (id == R.id.action_reload) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();
        String numPizzeria = getResources().getString(R.string.numero_pizzeria);

        if (id == R.id.nav_contact) {
            // Handle the call phone action
            Intent phoneIntent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + numPizzeria));
            startActivity(phoneIntent);
        } else if (id == R.id.nav_exit) {
            //deconnexion
            Intent outIntent = new Intent(getBaseContext(), Login.class);
            startActivityForResult(outIntent, 0);
            finish();
        } else if (id == R.id.nav_settings) {

        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    public void confirmerMessage(String titre, String message){
        AlertDialog.Builder builder = new AlertDialog.Builder(getBaseContext());
        builder.setCancelable(true);
        builder.setTitle(titre);
        builder.setMessage(message);
        builder.setPositiveButton("Confirmer",
                new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                    }
                });
        builder.setNegativeButton(android.R.string.cancel, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
            }
        });

        AlertDialog dialog = builder.create();
        dialog.show();
    }


}
