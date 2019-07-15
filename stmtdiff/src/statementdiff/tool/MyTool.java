package statementdiff.tool;
/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

import java.util.LinkedList;
import java.util.List;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import ch.uzh.ifi.seal.changedistiller.model.entities.SourceCodeChange;

public class MyTool {
    public void makeMyclass(String content, String content_before){
    	try {
  
    	if (content_before != null) {	    	
		        File newTextFile = new File("./src/example/Example.java");
		        FileWriter fw = new FileWriter(newTextFile);
		        fw.write(content_before);
		        fw.close();
    	}
    	if (content != null){
		        File newTextFile1 = new File("./src/example1/Example.java");
		        FileWriter fw1 = new FileWriter(newTextFile1);
		        fw1.write(content);
		        fw1.close();
		    	
    	}
    	} catch (IOException iox) {
	    	iox.printStackTrace();
	    }
    	 
    }
    public void makeOldMyclass(String content){
    	try {
    		if(content != null && content.length()>0
    			&& (content.contains("Enumeration enum") || content.contains("enum enum"))){
    				content= content.replaceAll("enum", "enum1");
    		//		content= content.replaceAll("Enumeration enum", "Enumeration enum1");
    		//	if(content.contains("enum enum"))
    		//		content= content.replaceAll("enum enum", "enum enum1");
    			
    		}
    	if (content != null){
		        File newTextFile1 = new File("./src/example/Example.java");
		        FileWriter fw1 = new FileWriter(newTextFile1);
		        fw1.write(content);
		        fw1.close();
		    	
    	}
    	} catch (IOException iox) {
	    	iox.printStackTrace();
	    }
    	 
    }
    public void makeClass(String content, String filename){
    	
    	try {
    		if (content != null){
		        File newTextFile1 = new File(filename);
		        FileWriter fw1 = new FileWriter(newTextFile1);
		        fw1.write(content);
		        fw1.close();
		    	
    	}
    	} catch (IOException iox) {
	    	iox.printStackTrace();
	    }
    	 
    }
    public String parseFilename(String filepath){
    	String filename = null;
    	String[] pathstrs = filepath.split("/");
    	if(pathstrs.length>0){
    		return pathstrs[pathstrs.length-1];
    	}
    	
    	return filename;
    }
    public String parseClassname(String filename){
    	if(filename == null)
    		return null;
    	String[] pathstrs = filename.split("\\.");
    	if(pathstrs.length>0){
    		if(pathstrs.length>1)
    			return pathstrs[pathstrs.length-2];
    		else
    			return pathstrs[pathstrs.length-1];
    	}
    	
    	return null;
    }
    public String parseExtname(String filename){
    	if(filename == null)
    		return null;
    	String[] pathstrs = filename.split("\\.");
    	if(pathstrs.length>0){
    		return pathstrs[pathstrs.length-1];
    	}
    	
    	return null;
    }
   public Boolean isASourceFile(String filename){
	  if( filename.endsWith(".java"))
		  return true;
	  else
		  return false;
   }
	
   public void writefile(String filename, String str){
  		File file = new File(filename);        
       try {
           if (!file.exists()) {
               file.createNewFile();
           }
           BufferedWriter writer  = new BufferedWriter(new FileWriter(file));  
           writer.write(str);
   		
           writer.flush();
           writer.close();
       } catch (IOException ex) {
          ex.printStackTrace();
       }
       
  	}
   public String replaceQuotationMarks(String str){
	   String str1 = "";
	   for(int i=0; i<str.length(); i++){
		   char c = str.charAt(i);
		   if(c == '\'')
			   str1 +="\\"+'\'' ;
		   else if(c == '\\')
			   str1 +="\\"+'\\' ;
		   else
			   str1 += c;
	   }
	   return str1;
   }
   public String[] getSourceLinesInFile(String fileName) {
	   File file = new File(fileName);
	   List<String> lines = new LinkedList<String>();
	   BufferedReader reader = null;
	   try {
		   reader = new BufferedReader(new FileReader(file));
		   String tempString = null;
		   while ((tempString = reader.readLine()) != null) {
			   lines.add(tempString);
		   }
		   reader.close();
	   } catch (IOException e) {
		   e.printStackTrace();
	   } finally {
		   if (reader != null) {
			   try {
				   reader.close();
			   } catch (IOException e1) {	
			   }
		   }
	   	}
	   if(lines.size()>0){
		   String[] linesarry = new String[lines.size()];
		   for(int i=0; i<lines.size(); i++){
			   linesarry[i] = lines.get(i);
		   }
		   return linesarry;
	   }
	   return null;
	 }
   public String makeDisitillerChanges(List<SourceCodeChange> fChanges){
   	int n = 0;
   	String resstr = "";
   	for(int i=0; i<fChanges.size(); i++){
   		SourceCodeChange change = fChanges.get(i);
   		if( change.getChangeType().toString().contains("DOC") 
   		|| change.getChangeType().toString().contains("COMMENT"))
   			continue;
   		n++;
   		if( n>= 255)
   			break;
   		String str = makeDistillerChangeStr(change);
   		if( resstr.length() == 0)
   			resstr = str;
   		else
   			resstr += "\n" + str;
   	}
   	return resstr;
   }
   public String makeDistillerChangeStr(SourceCodeChange change){
   	String entitycontent = change.getChangedEntity().toString();
		String entitytype = "";
		String content = "";
		if( entitycontent != null && entitycontent.length()>0){
			int index = entitycontent.indexOf(":");
			entitytype = entitycontent.substring(0, index).trim();
			content = entitycontent.substring(index+1).trim();
			//if(content.length()>100)
			//content = content.substring(0,100);//getFirstLine(content);
		}
		String str =  change.getChangeType().toString()
   			+" "+ entitytype
   			+" "+ content
   			+"("+ change.getChangedEntity().getStartPosition() 
   			+ ", "+ change.getChangedEntity().getEndPosition()
   			+")";
		return str;
   }
   
   
}

