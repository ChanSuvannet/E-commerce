    <template>
       <div>
        <div class="search-container">
            <input
type="text" class="search-input" v-model="searchQuery"
                placeholder="Search..."
                @input="onSearchInput"
            >
            <button class="search-button">
                <i class="fa fa-search"></i> 
            </button>
        </div>
       </div>
</template>
    
<script>
export default {
  name: 'SearchBox',
}
</script>
    
<style scoped>
    .search-container {
        position: relative;
        max-width: 500px;
        margin: 20px 0px;
    }
    
    .search-input {
        width: 100%;
        padding: 10px 40px 10px 10px; 
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 16px;
    }
    
    .search-button {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        background: transparent;
        border: none;
        cursor: pointer;
    }
    
    .search-button i {
        font-size: 18px;
        color: #555;
    }
    </style>
    